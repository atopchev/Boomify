class Api::AlbumsController < ApplicationController

    def show 
        @ablum = Album.find(params[:id])
        if @album
            render :show
        else 
            render @json.errors.full_messages
        end
    end

    def index
        @albums = Album.all;
    end

end
