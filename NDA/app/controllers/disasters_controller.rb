class DisastersController < ApplicationController
  def index
    @disasters = Disaster.all
  end
  def show
    @disaster = Disaster.find(params[:id])
  end
  
  def new
    @disaster = Disaster.new
  end

  def create
    @category = Category.find(params[:category_id])
    @disaster = @category.disasters.create(disaster_params)
    redirect_to category_path (@category)
  end

  def destroy
    @category = Category.find(params[:category_id])
    @disaster = @category.disasters.find(params[:id])
    @disaster.destroy
    redirect_to category_path(@category)
  end
  private
  def disaster_params
    params.require( :disaster).permit( :title, :description, :preperation, :photo_url)
  end

end
