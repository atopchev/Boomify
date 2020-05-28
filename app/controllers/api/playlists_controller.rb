class Api::PlaylistsController < ApplicationController

    def index
        @playlists = Playlist.all
        render "api/playlists/index"
    end

    def show 
        @playlist = Playlist.find(params[:id])
        render "api/playlists/show"
    end

    def create
        @playlist = Playlist.new(playlist_params);

        if @playlist.save
            render :show
        else 
            render @json.errors.full_messages
        end
    end

    def update
        @playlist = Playlist.find(params[:id])
        
        if @playlist.update(playlist_params)
            render :show
        else 
            render @json.errors.full_messages
        end
    end

    def destroy
        @playlist = Playlist.find(params[:id])
        @playlist.destroy
        render :show
    end

    private 
    def playlist_params
        params.require(:playlist).permit(:name, :user_id)
    end

end
