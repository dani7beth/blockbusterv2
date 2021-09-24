# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_09_24_204137) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "actors", force: :cascade do |t|
    t.bigint "movie_id", null: false
    t.string "first_name"
    t.string "last_name"
    t.string "age"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["movie_id"], name: "index_actors_on_movie_id"
  end

  create_table "awards", force: :cascade do |t|
    t.bigint "movie_id", null: false
    t.bigint "actor_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name"
    t.index ["actor_id"], name: "index_awards_on_actor_id"
    t.index ["movie_id"], name: "index_awards_on_movie_id"
  end

  create_table "movies", force: :cascade do |t|
    t.bigint "store_id", null: false
    t.string "title"
    t.string "genre"
    t.string "duration"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.float "price"
    t.index ["store_id"], name: "index_movies_on_store_id"
  end

  create_table "stores", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.string "open_time"
    t.string "close_time"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "actors", "movies"
  add_foreign_key "awards", "actors"
  add_foreign_key "awards", "movies"
  add_foreign_key "movies", "stores"
end
