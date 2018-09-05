class CreateClassrooms < ActiveRecord::Migration[5.2]
  def change
    create_table :classrooms do |t|
      t.string :address
      t.integer :monthly_fee
      t.integer :sqft
      t.integer :class_size
      t.boolean :provide_meals

      t.timestamps
    end
  end
end
