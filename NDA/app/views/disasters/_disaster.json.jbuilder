json.extract! disaster, :id, :title, :photo_url, :description, :preparation, :created_at, :updated_at
json.url disaster_url(disaster, format: :json)