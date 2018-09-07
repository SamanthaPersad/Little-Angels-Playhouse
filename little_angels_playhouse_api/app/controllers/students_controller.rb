class StudentsController < ApplicationController
  

  # GET /students
  def index
    @students = Student.all

    render json: @students
  end

  # GET /students/1
  def show
    @student = Student.find(params[:id])
    render json: {message: @student}
  end

  # POST /students
  def create
    puts "hi"
    @student = Student.new(student_params)

    if @student.save
      render json: {message: student_params}
    else
      render json: {message: "Error"}
    end
  end

  # PATCH/PUT /students/1
  def update
    @student = Student.find(params[:id])
    if @student.update(student_params)
      render json: {message: @student}
    else
      render json: {message: "Error"}
    end
  end

  # DELETE /students/1
  def destroy
    student = Student.find(params[:id])
    if student.destroy
      render json: {message: "destroyed"}
    else
      render json: {message: "Error"}
  end

end

  private

    # Only allow a trusted parameter "white list" through.
    def student_params
      params.require(:student).permit(:first_name, :last_name, :age, :class_id)
    end
end
