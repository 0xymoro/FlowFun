class PagesController < ApplicationController
  def index
    @posts = NineGag.index(nine_gag_url, params[:page])

    respond_to do |format|
      format.html
      format.json { render json: { posts: @posts } }
    end
  end

  def show
    @post = NineGag.show(params[:id])
  end

  private

  def nine_gag_url
    'hot'
  end
end
