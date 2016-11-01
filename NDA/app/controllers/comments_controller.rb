class CommentsController < ApplicationController

  def create
    @disaster = Disaster.find(params[:disaster_id])
    @comment = @disaster.comments.create(comment_params)
    redirect_to disaster_path(@disaster)
  end

  private
  def comment_params
    params.require(:comment).permit( :commenter, :body)
  end
end
