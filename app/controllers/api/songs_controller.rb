class Api::SongsController < ApplicationController

    def index
        @songs = Song.all
    end
    
    def show
        @song = Song.find(params[:id])
        if @song 
            render :show
        else 
            
        end
    end

    private
    def song_params
        params.require(:song).permit(:name, :artist_id, :album_id. :length)
    end


end
