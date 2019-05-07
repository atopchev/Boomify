class Api::PlaylistsController < ApplicationController

    def index
        @playlists = Playlist.all
    end

    def show 
        @playlist = Playlist.find(params[:id])
    end

    def create
        @playlist = Playlist.new(playlist_params);

        if @playlist.save
            render :show
        else 

        end
    end

    def update
        @playlist = Playlist.find(params[:id])
        
        if @playlist.update(playlist_params)
            render :show
        else 

        end
    end

    def destroy
        @playlist = Playlist.find(params[:id])
        @playlist.destroy

    end

    private 
    def playlist_params
        params.require(:playlist).permit(:name, :user_id)
    end

end
