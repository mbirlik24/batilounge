import os
import subprocess
import imageio_ffmpeg

ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
print(f"FFmpeg binary path: {ffmpeg_exe}")

src_video = r"c:\Users\mirac\Documents\antigravity\splendid-maxwell\mediasort_Db6E8o6NqsC_2026-08-14-21-44-49.mp4"
dest_video = r"c:\Users\mirac\Documents\antigravity\splendid-maxwell\public\videos\hero.mp4"
temp_video = r"c:\Users\mirac\Documents\antigravity\splendid-maxwell\public\videos\hero_compressed.mp4"

cmd = [
    ffmpeg_exe,
    "-y",
    "-i", src_video,
    "-an", # remove audio track so autoplay is guaranteed
    "-vcodec", "libx264",
    "-pix_fmt", "yuv420p",
    "-profile:v", "baseline",
    "-level", "3.0",
    "-vf", "scale=-2:720",
    "-movflags", "+faststart",
    "-crf", "26",
    temp_video
]

print("Executing video compression command...")
result = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
print("FFmpeg stdout:", result.stdout)
print("FFmpeg stderr:", result.stderr[-500:])

if os.path.exists(temp_video):
    size = os.path.getsize(temp_video)
    print(f"Compressed video created! Size: {size} bytes ({size / 1024 / 1024:.2f} MB)")
    if os.path.exists(dest_video):
        os.remove(dest_video)
    os.rename(temp_video, dest_video)
    print(f"Replaced {dest_video} with compressed web-optimized video!")
