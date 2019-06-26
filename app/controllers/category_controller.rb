class CategoriesController < ApplicationController

    before_action :set_category, only: [:show, :update, :destroy, :get_comments]
  
    # GET /categories
    def index
      @categories = Category.all
      render json: @categories, status: :ok
    end
  
    #GET /category/:id
    def show
      render json: @category, status: :ok
    end
  
    # POST /categories
    def create
      @category = Category.new(category_params)
      if @category.save
        render json: @category, status: :created, location: @category
      else
        render json: @category.errors, status: :bad_request
      end
    end
  
    # PATCH/PUT /category/:id
    def update
      if @category.update(category_params)
        render json: @category, status: :accepted
      else
        render json: @category.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /category/:id
    def destroy
      @category.destroy
    end
  
    def category_params
      params.permit(:title, :content)
    end
  
    # GET /categories/:id/posts
    def get_posts
      render json: @category.posts
    end
  
  
    private
  
    def set_category
      @category = Category.find(params[:id])
    end
  
  
  end
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  