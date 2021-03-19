json.array! @clips do |clip| 
  json.extract! clip, :id, :title
  json.video_url url_for(clip.movie)
end