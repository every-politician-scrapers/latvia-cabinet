#!/bin/env ruby
# frozen_string_literal: true

require 'every_politician_scraper/scraper_data'
require 'pry'

class MemberList
  class Member
    field :name do
      noko.css('.employee-name').text.tidy.delete_prefix('Dr. ')
    end

    field :position do
      noko.css('.employee-position').text.split('/').map(&:tidy)
    end
  end

  class Members
    def member_container
      noko.css('#block-ministry-content .employee-block')
    end
  end
end

file = Pathname.new 'official.html'
puts EveryPoliticianScraper::FileData.new(file).csv
