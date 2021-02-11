module Api
  module V1
      class BaseController < ApplicationController
        skip_before_action :verify_authenticity_token
        before_action :underscore_params!


        def underscore_params!
          params.transform_keys!(&:underscore)
        end
      end
  end
end
