class ItemSerializer < ActiveModel::Serializer
  attributes :id,
  :description,
  :payload,
  :title
end
