# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  screen_name     :string
#  city            :string
#  img_url         :string
#  pronouns        :string
#  age             :integer
#  bio             :text
#  first_date_idea :text
#  my_aesthetic    :string
#  my_anthem       :string
#  hobbies         :string
#  looking_for     :string
#

# helpful info on indexing http://www.rakeroutes.com/blog/increase-rails-performance-with-database-indexes/

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, :pronouns, :age, :city, :screen_name, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :screen_name, length: {maximum: 20, allow_nil: true}
  validates :bio, length: {maximum: 1000, allow_nil: true}
  validates :first_date_idea, length: {maximum: 500, allow_nil: true}
  validates :pronouns, length: {maximum: 20, allow_nil: true}
  validates :my_anthem, length: {maximum: 75, allow_nil: true}
  validates :hobbies, length: {maximum: 100, allow_nil: true}
  validates :looking_for, length: {maximum: 50, allow_nil: true}
  validates :my_aesthetic, length: {maximum: 75, allow_nil: true}

  has_many :messagethreads_initiated,
    class_name: :Messagethread,
    primary_key: :id,
    foreign_key: :initiator_id

  has_many :messagethreads_received,
    class_name: :Messagethread,
    primary_key: :id,
    foreign_key: :receiver_id

  has_many :users_messaged,
    through: :messagethreads_initiated,
    source: :receiver

  has_many :users_messaging,
    through: :messagethreads_received,
    source: :initiator

  has_many :sent_messages,
    class_name: :Message,
    primary_key: :id,
    foreign_key: :sender_id

  has_many :received_messages,
    class_name: :Message,
    primary_key: :id,
    foreign_key: :sender_id



  after_initialize :ensure_session_token!

  attr_reader :password
  attr_accessor :has_thread

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token!
    self.session_token||=SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def has_thread?(user2)
    self.has_thread = false
  end
end
