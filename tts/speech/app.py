from fastapi import FastAPI
from pydantic import BaseModel
from tts_arabic import tts
from pymongo import MongoClient
import gridfs
from fastapi.responses import StreamingResponse
import io
import os
from dotenv import load_dotenv

load_dotenv()
port = int(os.getenv('PORT'))
app = FastAPI()

URL=os.getenv('URL')
client = MongoClient(URL)
db = client["test"]
fs = gridfs.GridFS(db)
class TTSRequest(BaseModel):
    text: str



@app.post("/generate_speech/")
async def generate_speech(request: TTSRequest):
    file_path = "./output.wav"
    wave = tts(request.text, save_to =file_path, speaker=1, volume=0.5, play=True, vowelizer='shakkelha')

    existing_file = db.fs.files.find_one({"filename": "output.wav"})
    if existing_file:
        fs.delete(existing_file["_id"])

    with open(file_path, "rb") as f:
        file_id = fs.put(f, filename="output.wav", content_type="audio/wav")

    return {"message": "Speech generated and uploaded successfully", "file_id": str(file_id)}


@app.get("/get_audio/")
async def get_audio():

    existing_file = db.fs.files.find_one({"filename": "output.wav"})
    file_data = fs.get(existing_file["_id"])
    
    return StreamingResponse(
        io.BytesIO(file_data.read()),
        media_type="audio/wav", 
        headers={"Content-Disposition": 'inline; filename="output.wav"'}
    )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=port)    




  

