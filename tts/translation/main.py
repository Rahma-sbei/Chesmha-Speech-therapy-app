from fastapi import FastAPI
from pydantic import BaseModel
import ctranslate2
import transformers
import os
from dotenv import load_dotenv

load_dotenv()
p = int(os.getenv('PORT'))
app = FastAPI()

print(p)

src_lang = "eng_Latn"
tgt_lang = "aeb_Arab"

translator = ctranslate2.Translator("../nllb_model", device="cuda", compute_type="float16", inter_threads=4, device_index=0)
tokenizer = transformers.AutoTokenizer.from_pretrained("../nllb_model", src_lang=src_lang, clean_up_tokenization_spaces=True)

class TranslationRequest(BaseModel):
    text: str

def translate_text(text: str):
    source = tokenizer.convert_ids_to_tokens(tokenizer.encode(text))
    target_prefix = [tgt_lang]
    
    results = translator.translate_batch([source], target_prefix=[target_prefix])
    target = results[0].hypotheses[0][1:]
    
    result = tokenizer.decode(tokenizer.convert_tokens_to_ids(target))
    
    
    return result

@app.post("/translate/")
async def translate(request: TranslationRequest):
    translated_text = translate_text(request.text)
    return {"translated_text": translated_text}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=p)
