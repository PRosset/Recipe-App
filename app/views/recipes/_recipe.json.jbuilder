json.extract! recipe, :id, :name, :photo, :source_url, :serving_size, :ingredients, :instructions, :health_labels, :created_at, :updated_at
json.url recipe_url(recipe, format: :json)