class CategoriesController < ApplicationController

    before_action :set_category, only: [:show, :update, :destroy, :get_posts]
  
    # GET /category
    def index
      @categories = Category.all
      render json: @categories, status: :ok
    end
  
    #GET /category/:id
    def show
      render json: @category, status: :ok
    end
  
    # POST /category
    def create
      @categories = Category.new(category_params)
      if @categories.save
        render json: @categories, status: :created, location: @categories
      else
        render json: @categories.errors, status: :bad_request
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
      params.permit(:name)
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  