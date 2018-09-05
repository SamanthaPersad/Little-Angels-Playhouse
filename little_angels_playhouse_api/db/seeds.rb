# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Student.delete_all
# Classroom.delete_all

Classroom.create([
   {address: "25 Sterns Lane, Copiague, NY", monthly_fee: 6000, sqft: 7000, class_size: 15, provide_meals: true}, 
   {address: "10 Broadway St, Manhattan, NY", monthly_fee: 6000, sqft: 7000, class_size: 15, provide_meals: true },
   {address: "244 Upper East Side, Manhattan, NY", monthly_fee: 6000, sqft: 7000, class_size: 15, provide_meals: true}, 
   {address: "12 Abunderale Ave, Valley Stream, NY", monthly_fee: 6000, sqft: 7000, class_size: 15, provide_meals: true}, 
   {address: "98 Chambers St, NY", monthly_fee: 6000, sqft: 7000, class_size: 15, provide_meals: true},
   {address: "135-12 Rockaway Blvd, Queens, NY",monthly_fee: 6000, sqft: 7000, class_size: 15, provide_meals: true},
   {address: "14th Street, Union Ave, NY", monthly_fee: 6000, sqft: 7000, class_size: 15, provide_meals: true},
   {address: "600 Old Country Road, Hicksville, NY", monthly_fee: 6000, sqft: 7000, class_size: 15, provide_meals: true} 
])



Student.create([
   {first_name: "Waseem", last_name: "Nafisi", age: 1, classroom_id: 1},
   {first_name: "Muhammad", last_name: "Ibin kaleb", age: 1, class_id: 1},
   {first_name: "Tala", last_name: "Aljazari", age: 1, class_id: 1},
   {first_name: "Tagreed", last_name: "Tina", age: 2, class_id: 1},
   {first_name: "Basil", last_name: "nafisi", age: 2, class_id: 1},
   {first_name: "Osama", last_name: "nafisi", age: 2, class_id: 1},
   {first_name: "Sami", last_name: "Ceo", age: 2, class_id: 1},
   {first_name: "Pendra", last_name: "Pratt", age: 2, class_id: 1}
])