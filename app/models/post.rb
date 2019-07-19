class Post < ApplicationRecord
  validates_presence_of :title, :content, :author
  has_many :comments
end