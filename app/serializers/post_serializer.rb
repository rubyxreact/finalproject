class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :created_at, :updated_at, :nb_comments, :comments

  def nb_comments
    Comment.where(post_id: object.id).count
  end
end


