class User < ApplicationRecord
  has_secure_password
  acts_as_token_authenticatable
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
  validates :email, uniqueness: { case_sensitive: false }, presence: true, allow_blank: false
  validates :password,  length:     { minimum: 4, allow_nil: true }

end
