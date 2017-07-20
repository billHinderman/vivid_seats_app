source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

# Preinstalled
gem 'jbuilder', '~> 2.5'
gem 'jquery-rails'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.0'
gem 'rails', '~> 5.0.3'
gem 'redis', '~> 3.0'
gem 'sass-rails', '~> 5.0'
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem 'uglifier', '>= 1.3.0'

# Specified
gem 'active_model_serializers', '~> 0.10.0'                                                         # Serialization for AM
gem 'amoeba'                                                                                        # Deep-copying for Active Record
gem 'apartment'                                                                                     # Multitenant support
gem 'apartment-sidekiq'                                                                             # Multitenant Job backgrounding
gem 'awesome_print', require: 'ap'                                                                  # Formatted print for console output
gem 'cancancan', '~> 2.0'                                                                           # User permissions
# gem 'carrierwave', github: 'carrierwaveuploader/carrierwave'                                        # Image uploading
# gem 'carrierwave-bombshelter'                                                                       # Image OOM error protection for CarrierWave
# gem 'carrierwave_backgrounder', :git => 'https://github.com/lardawge/carrierwave_backgrounder.git'  # Background processing for CarrierWave
gem 'devise'                                                                                        # User authentication
gem 'dotenv-rails', groups: [:development, :test]                                                   # Environment variables in dev and test
gem 'faker'                                                                                         # Create fake data for testing / startup
# gem 'fog-aws'                                                                                       # S3 uploading for CarrierWave
gem 'hirb'                                                                                          # Better DB output in IRB
gem 'i18n-js'                                                                                       # For passing i18n to JavaScript (React) views
# gem 'mini_magick'                                                                                   # Image processing for CarrierWave
gem 'nokogiri'                                                                                      # HTML, XML, SAX, and Reader parsers (XPath and CSS selector support)
gem 'premailer-rails'                                                                               # CSS styling of emails without required inlining
gem 'rack-cors', require: 'rack/cors'                                                               # Rack cross-origin implementation
gem 'rails-controller-testing'                                                                      # Testing controllers in RSpec
gem 'react_on_rails', '~> 6'                                                                        # React rendering
gem 'redis-rails'                                                                                   # Redis store setup and configuration
gem 'sidekiq'                                                                                       # Job backgrounding
gem 'simple_form'                                                                                   # Easier form gereration
gem 'stripe', :git => 'https://github.com/stripe/stripe-ruby'                                       # Stripe, for credit card processing
gem 'uri-query_params'                                                                              # Parse query params from URI

group :development, :test do
  gem 'byebug', platform: :mri
  gem 'factory_girl_rails'
  gem 'rspec-activemodel-mocks'
  gem 'rspec-rails', '~> 3.5'
  gem 'rspec-retry'
end

group :development do
  gem 'better_errors'                                         # Improved error page with console
  gem 'binding_of_caller'                                     # Binding for error console (dependency of better_errors)
  gem 'letter_opener'                                         # Capture mail in browser for dev
  gem 'letter_opener_web', '~> 1.2.0'                         # And for viewing that mail
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end

group :test do
end

gem 'mini_racer', platforms: :ruby
