require 'vocatus/api'

DataMapper::Logger.new($stdout, :debug)
DataMapper.setup(:default, ENV['DATABASE_URL'] || 'postgres://vocatus_datorum:vocatus_datorum@localhost/vocatus_datorum')
DataMapper.finalize
DataMapper.auto_migrate!

require 'vocatus/seed'

Vocatus::Datorum::Root.finalize