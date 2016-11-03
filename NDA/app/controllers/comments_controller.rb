class CommentsController < ApplicationController
def index
  @disaster = Disaster.find(params[:disaster_id])
  @comment = @disaster.comments
  render json: @comments
end
  def create
    @disaster = Disaster.find(params[:disaster_id])
    @comment = @disaster.comments.create(comment_params)
    render json: @comment

  end

  private
  def comment_params
    params.require(:comment).permit( :commenter, :body)
  end
end
