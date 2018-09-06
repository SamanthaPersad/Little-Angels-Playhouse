class ClassroomsController < ApplicationController
  

  # GET /classrooms
  def index
    @classrooms = Classroom.all

    render json: @classrooms
  end

  # GET /classrooms/1
  def show
    @classroom = Classroom.find(params[:id])
    render json: {message: @classroom}
  end

  # POST /classrooms
  def create
    @classroom = Classroom.new(classroom_params)
    if @classroom.save
      render json: {message: classroom_params}
    else
      render json: {message: "Error"}
    end
  end

  # PATCH/PUT /classrooms/1
  def update
    @classroom = Classroom.find(params[:id])
    if @classroom.update(classroom_params)
      render json: {message: @classroom}
    else
      render json: {message: "Error"}
    end
  end

  # DELETE /classrooms/1
  def destroy
    classroom = Classroom.find(params[:id])
    if classroom.destroy
      render json: {mesage: "destroyed"}
    else 
      render json: {message: "Error"}
  end

end

  private

    # Only allow a trusted parameter "white list" through.
    def classroom_params
      params.require(:classroom).permit(:address, :monthly_fee, :sqft, :class_size, :provide_meals)
    end
end
