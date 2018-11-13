json.extract! post, :id, :title, :user_name, :published_at, :created_at, :updated_at
json.url post_url(post, format: :json)
