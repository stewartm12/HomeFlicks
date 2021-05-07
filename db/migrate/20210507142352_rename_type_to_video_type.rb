class RenameTypeToVideoType < ActiveRecord::Migration[5.2]
  def change
    rename_column :movies, :type, :video_type
  end
end
