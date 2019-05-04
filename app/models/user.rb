# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  session_token   :string
#  password_digest :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

    validates :session_token, :password_digest, presence: true
    validates :email, :username, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }

    attr_reader :password
    after_initialize :ensure_token

    has_many :playlists, 
        foreign_key: :user_id, 
        class_name: 'Playlists'

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def reset_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end
    
    def ensure_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
    
    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

end
