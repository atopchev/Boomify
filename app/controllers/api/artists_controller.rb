class Api::ArtistsController < ApplicationController

    # def show 
    #     @artist = Artist.find(params[:id])
    #     if @artist
    #         render :show
    #     else 
    #         render @json.errors.full_messages
    #     end
    # end

    def index
        @artists = Artist.all
    end

    
end
