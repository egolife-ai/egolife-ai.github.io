#!/bin/bash

# input_dir="videos/demo1_blur"
input_dir="videos/demo2_blur"

# output_dir="public/videos/demo1_blur"
output_dir="public/videos/demo2_blur"

mkdir -p "$output_dir"

for video in "$input_dir"/*.mp4; do
  base_name=$(basename "$video" .mp4)

  output_video="$output_dir/${base_name}.mp4"

  ffmpeg -i "$video" -vf scale=360:-2,setsar=1:1 -vcodec h264 -acodec aac -crf 28 -strict -2 -fpsmax 30 "$output_video"

  echo "Processed $video to $output_video"
done