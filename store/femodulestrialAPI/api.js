import axios from "axios"
const femodulestrialAPI = axios.create({
  baseURL: "https://fe-modules-trial-43858.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return femodulestrialAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return femodulestrialAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return femodulestrialAPI.post(`/api/v1/signup/`, payload)
}
function modules_blackbaud_access_token_create(payload) {
  return femodulestrialAPI.post(`/modules/blackbaud/access/token/`)
}
function modules_blackbaud_consent_channels_retrieve(payload) {
  return femodulestrialAPI.get(`/modules/blackbaud/consent/channels/`)
}
function modules_blackbaud_constituent_create_action_attachment_create(
  payload
) {
  return femodulestrialAPI.post(
    `/modules/blackbaud/constituent/create_action_attachment/`,
    payload
  )
}
function modules_blackbaud_constituent_create_constituent_action_create(
  payload
) {
  return femodulestrialAPI.post(
    `/modules/blackbaud/constituent/create_constituent_action/`,
    payload
  )
}
function modules_blackbaud_constituent_create_rating_create(payload) {
  return femodulestrialAPI.post(
    `/modules/blackbaud/constituent/create_rating/`,
    payload
  )
}
function modules_blackbaud_constituent_create_relationship_create(payload) {
  return femodulestrialAPI.post(
    `/modules/blackbaud/constituent/create_relationship/`,
    payload
  )
}
function modules_blackbaud_constituent_delete_constituent_action_destroy(
  payload
) {
  return femodulestrialAPI.delete(
    `/modules/blackbaud/constituent/delete_constituent_action/${payload.action_id}/`
  )
}
function modules_blackbaud_constituent_delete_constituent_action_attachment_destroy(
  payload
) {
  return femodulestrialAPI.delete(
    `/modules/blackbaud/constituent/delete_constituent_action_attachment/`
  )
}
function modules_blackbaud_constituent_delete_constituent_action_custom_field_destroy(
  payload
) {
  return femodulestrialAPI.delete(
    `/modules/blackbaud/constituent/delete_constituent_action_custom_field/${payload.custom_field_id}/`
  )
}
function modules_blackbaud_constituent_delete_rating_destroy(payload) {
  return femodulestrialAPI.delete(
    `/modules/blackbaud/constituent/delete_rating/${payload.rating_id}/`
  )
}
function modules_blackbaud_constituent_delete_relationship_destroy(payload) {
  return femodulestrialAPI.delete(
    `/modules/blackbaud/constituent/delete_relationship/${payload.relationship_id}/`
  )
}
function modules_blackbaud_constituent_edit_constituent_aliases_partial_update(
  payload
) {
  return femodulestrialAPI.patch(
    `/modules/blackbaud/constituent/edit_constituent_aliases/${payload.alias_id}/`,
    payload
  )
}
function modules_blackbaud_constituent_edit_relationship_partial_update(
  payload
) {
  return femodulestrialAPI.patch(
    `/modules/blackbaud/constituent/edit_relationship/${payload.relationship_id}/`,
    payload
  )
}
function modules_blackbaud_constituent_get_alias_list_in_single_constituent_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituent/get_alias_list_in_single_constituent/${payload.constituent_id}/`
  )
}
function modules_blackbaud_constituent_get_alias_types_retrieve(payload) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituent/get_alias_types/`
  )
}
function modules_blackbaud_constituent_get_attachment_tags_retrieve(payload) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituent/get_attachment_tags/`
  )
}
function modules_blackbaud_constituent_get_constituent_action_attachments_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituent/get_constituent_action/${payload.action_id}/attachments/`
  )
}
function modules_blackbaud_constituent_get_constituent_action_customfields_categories_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituent/get_constituent_action_customfields_categories/`
  )
}
function modules_blackbaud_constituent_get_constituent_action_customfields_categories_details_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituent/get_constituent_action_customfields_categories_details/`
  )
}
function modules_blackbaud_constituent_get_constituent_action_customfields_list_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituent/get_constituent_action_customfields_list/${payload.action_id}/`
  )
}
function modules_blackbaud_constituent_get_constituent_action_list_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituent/get_constituent_action_list/`
  )
}
function modules_blackbaud_constituent_get_constituent_action_location_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituent/get_constituent_action_location/`
  )
}
function modules_blackbaud_constituent_get_constituent_action_status_types_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituent/get_constituent_action_status_types/`
  )
}
function modules_blackbaud_constituent_get_constituent_action_types_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituent/get_constituent_action_types/`
  )
}
function modules_blackbaud_constituent_get_rating_categories_retrieve(payload) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituent/get_rating_categories/`
  )
}
function modules_blackbaud_constituent_get_rating_list_on_single_constituent_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituent/get_rating_list_on_single_constituent/${payload.constituent_id}/`
  )
}
function modules_blackbaud_constituent_get_rating_sources_retrieve(payload) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituent/get_rating_sources/`
  )
}
function modules_blackbaud_constituent_get_rating_values_retrieve(payload) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituent/get_rating_values/`
  )
}
function modules_blackbaud_constituent_get_relationship_details_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituent/get_relationship_details/${payload.relationship_id}/`
  )
}
function modules_blackbaud_constituent_get_relationship_list_in_all_constituents_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituent/get_relationship_list_in_all_constituents/`
  )
}
function modules_blackbaud_constituent_get_relationship_list_in_single_constituent_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituent/get_relationship_list_in_single_constituent/${payload.constituent_id}/`
  )
}
function modules_blackbaud_constituent_get_relationship_types_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituent/get_relationship_types/`
  )
}
function modules_blackbaud_constituent_get_suffixes_retrieve(payload) {
  return femodulestrialAPI.get(`/modules/blackbaud/constituent/get_suffixes/`)
}
function modules_blackbaud_constituent_get_titles_retrieve(payload) {
  return femodulestrialAPI.get(`/modules/blackbaud/constituent/get_titles/`)
}
function modules_blackbaud_constituent_search_retrieve(payload) {
  return femodulestrialAPI.get(`/modules/blackbaud/constituent/search/`)
}
function modules_blackbaud_constituent_update_constituent_action_partial_update(
  payload
) {
  return femodulestrialAPI.patch(
    `/modules/blackbaud/constituent/update_constituent_action/${payload.action_id}/`,
    payload
  )
}
function modules_blackbaud_constituent_update_constituent_action_attachment_partial_update(
  payload
) {
  return femodulestrialAPI.patch(
    `/modules/blackbaud/constituent/update_constituent_action_attachment/`,
    payload
  )
}
function modules_blackbaud_constituent_update_constituent_action_custom_field_partial_update(
  payload
) {
  return femodulestrialAPI.patch(
    `/modules/blackbaud/constituent/update_constituent_action_custom_field/${payload.custom_field_id}/`,
    payload
  )
}
function modules_blackbaud_constituent_update_rating_partial_update(payload) {
  return femodulestrialAPI.patch(
    `/modules/blackbaud/constituent/update_rating/${payload.rating_id}/`,
    payload
  )
}
function modules_blackbaud_constituents_constituent_appeal_list_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituents/constituent_appeal_list/${payload.constituent_id}/`
  )
}
function modules_blackbaud_constituents_constituent_attachment_list_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituents/constituent_attachment_list/${payload.constituent_id}/`
  )
}
function modules_blackbaud_constituents_constituent_details_retrieve(payload) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituents/constituent_details/${payload.constituent_id}/`
  )
}
function modules_blackbaud_constituents_convert_non_constituent_to_constituent_create(
  payload
) {
  return femodulestrialAPI.post(
    `/modules/blackbaud/constituents/convert_non_constituent_to_constituent/${payload.non_constituent_id}/`
  )
}
function modules_blackbaud_constituents_create_address_create(payload) {
  return femodulestrialAPI.post(
    `/modules/blackbaud/constituents/create_address/`,
    payload
  )
}
function modules_blackbaud_constituents_create_alias_collection_create(
  payload
) {
  return femodulestrialAPI.post(
    `/modules/blackbaud/constituents/create_alias_collection/${payload.constituent_id}/`,
    payload
  )
}
function modules_blackbaud_constituents_create_aliases_create(payload) {
  return femodulestrialAPI.post(
    `/modules/blackbaud/constituents/create_aliases/`,
    payload
  )
}
function modules_blackbaud_constituents_create_attachment_create(payload) {
  return femodulestrialAPI.post(
    `/modules/blackbaud/constituents/create_attachment/`,
    payload
  )
}
function modules_blackbaud_constituents_create_constituent_create(payload) {
  return femodulestrialAPI.post(
    `/modules/blackbaud/constituents/create_constituent/`,
    payload
  )
}
function modules_blackbaud_constituents_create_constituent_action_custom_field_create(
  payload
) {
  return femodulestrialAPI.post(
    `/modules/blackbaud/constituents/create_constituent_action_custom_field/`,
    payload
  )
}
function modules_blackbaud_constituents_create_constituent_code_create(
  payload
) {
  return femodulestrialAPI.post(
    `/modules/blackbaud/constituents/create_constituent_code/`,
    payload
  )
}
function modules_blackbaud_constituents_create_constituent_custom_field_create(
  payload
) {
  return femodulestrialAPI.post(
    `/modules/blackbaud/constituents/create_constituent_custom_field/`,
    payload
  )
}
function modules_blackbaud_constituents_create_constituent_custom_field_collection_create(
  payload
) {
  return femodulestrialAPI.post(
    `/modules/blackbaud/constituents/create_constituent_custom_field_collection/${payload.constituent_id}/`,
    payload
  )
}
function modules_blackbaud_constituents_create_document_create(payload) {
  return femodulestrialAPI.post(
    `/modules/blackbaud/constituents/create_document/`,
    payload
  )
}
function modules_blackbaud_constituents_create_education_create(payload) {
  return femodulestrialAPI.post(
    `/modules/blackbaud/constituents/create_education/`,
    payload
  )
}
function modules_blackbaud_constituents_create_education_custom_field_create(
  payload
) {
  return femodulestrialAPI.post(
    `/modules/blackbaud/constituents/create_education_custom_field/`,
    payload
  )
}
function modules_blackbaud_constituents_delete_address_details_destroy(
  payload
) {
  return femodulestrialAPI.delete(
    `/modules/blackbaud/constituents/delete_address_details/${payload.address_id}/`
  )
}
function modules_blackbaud_constituents_delete_aliases_destroy(payload) {
  return femodulestrialAPI.delete(
    `/modules/blackbaud/constituents/delete_aliases/${payload.alias_id}/`
  )
}
function modules_blackbaud_constituents_delete_attachment_destroy(payload) {
  return femodulestrialAPI.delete(
    `/modules/blackbaud/constituents/delete_attachment/`
  )
}
function modules_blackbaud_constituents_delete_constituent_code_destroy(
  payload
) {
  return femodulestrialAPI.delete(
    `/modules/blackbaud/constituents/delete_constituent_code/${payload.constituent_code_id}/`
  )
}
function modules_blackbaud_constituents_delete_education_destroy(payload) {
  return femodulestrialAPI.delete(
    `/modules/blackbaud/constituents/delete_education/${payload.education_id}/`
  )
}
function modules_blackbaud_constituents_delete_education_custom_field_destroy(
  payload
) {
  return femodulestrialAPI.delete(
    `/modules/blackbaud/constituents/delete_education_custom_field/${payload.custom_field_id}/`
  )
}
function modules_blackbaud_constituents_get_address_details_retrieve(payload) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituents/get_address_details/${payload.address_id}/`
  )
}
function modules_blackbaud_constituents_get_address_list_retrieve(payload) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituents/get_address_list/`
  )
}
function modules_blackbaud_constituents_get_address_list_in_constituents_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituents/get_address_list_in_constituents/${payload.constituent_id}/`
  )
}
function modules_blackbaud_constituents_get_address_types_retrieve(payload) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituents/get_address_types/`
  )
}
function modules_blackbaud_constituents_get_constituent_code_details_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituents/get_constituent_code_details/${payload.constituent_code_id}/`
  )
}
function modules_blackbaud_constituents_get_constituent_code_list_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituents/get_constituent_code_list/`
  )
}
function modules_blackbaud_constituents_get_constituent_code_list_in_constituent_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituents/get_constituent_code_list_in_constituent/${payload.constituent_id}/`
  )
}
function modules_blackbaud_constituents_get_constituent_custom_field_categories_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituents/get_constituent_custom_field_categories/`
  )
}
function modules_blackbaud_constituents_get_constituent_custom_field_categories_details_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituents/get_constituent_custom_field_categories_details/`
  )
}
function modules_blackbaud_constituents_get_constituent_custom_field_categories_values_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituents/get_constituent_custom_field_categories_values/`
  )
}
function modules_blackbaud_constituents_get_constituent_custom_field_list_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituents/get_constituent_custom_field_list/`
  )
}
function modules_blackbaud_constituents_get_constituent_custom_field_list_in_single_constituent_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituents/get_constituent_custom_field_list_in_single_constituent/${payload.constituent_id}/`
  )
}
function modules_blackbaud_constituents_get_countries_retrieve(payload) {
  return femodulestrialAPI.get(`/modules/blackbaud/constituents/get_countries/`)
}
function modules_blackbaud_constituents_get_currencyconfiguration_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituents/get_currencyconfiguration/`
  )
}
function modules_blackbaud_constituents_get_custom_field_list_in_education_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituents/get_custom_field_list_in_education/${payload.education_id}/`
  )
}
function modules_blackbaud_constituents_get_education_custom_field_categories_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituents/get_education_custom_field_categories/`
  )
}
function modules_blackbaud_constituents_get_education_degrees_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituents/get_education_degrees/`
  )
}
function modules_blackbaud_constituents_get_education_list_retrieve(payload) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituents/get_education_list/`
  )
}
function modules_blackbaud_constituents_get_education_list_in_constituent_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituents/get_education_list_in_constituent/${payload.constituent_id}/`
  )
}
function modules_blackbaud_constituents_get_education_record_retrieve(payload) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituents/get_education_record/${payload.education_id}/`
  )
}
function modules_blackbaud_constituents_get_education_schools_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituents/get_education_schools/`
  )
}
function modules_blackbaud_constituents_get_education_statuses_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituents/get_education_statuses/`
  )
}
function modules_blackbaud_constituents_get_education_subjects_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituents/get_education_subjects/`
  )
}
function modules_blackbaud_constituents_get_education_types_retrieve(payload) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/constituents/get_education_types/`
  )
}
function modules_blackbaud_constituents_list_retrieve(payload) {
  return femodulestrialAPI.get(`/modules/blackbaud/constituents/list/`)
}
function modules_blackbaud_constituents_update_constituent_address_partial_update(
  payload
) {
  return femodulestrialAPI.patch(
    `/modules/blackbaud/constituents/update_constituent_address/${payload.address_id}/`,
    payload
  )
}
function modules_blackbaud_event_get_event_attachment_list_retrieve(payload) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/event/${payload.event_id}/get_event_attachment_list/`
  )
}
function modules_blackbaud_event_get_event_fees_retrieve(payload) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/event/${payload.event_id}/get_event_fees/`
  )
}
function modules_blackbaud_event_get_event_participant_options_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/event/${payload.event_id}/get_event_participant_options/`
  )
}
function modules_blackbaud_event_get_event_participant_donation_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/event/${payload.participant_id}/get_event_participant_donation/`
  )
}
function modules_blackbaud_event_get_event_participant_fee_payments_retrieve(
  payload
) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/event/${payload.participant_id}/get_event_participant_fee_payments/`
  )
}
function modules_blackbaud_event_get_event_participant_fees_retrieve(payload) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/event/${payload.participant_id}/get_event_participant_fees/`
  )
}
function modules_blackbaud_event_get_participant_options_retrieve(payload) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/event/${payload.participant_id}/get_participant_options/`
  )
}
function modules_blackbaud_event_create_event_create(payload) {
  return femodulestrialAPI.post(
    `/modules/blackbaud/event/create_event/`,
    payload
  )
}
function modules_blackbaud_event_create_event_attachment_create(payload) {
  return femodulestrialAPI.post(
    `/modules/blackbaud/event/create_event_attachment/${payload.event_id}/`,
    payload
  )
}
function modules_blackbaud_event_create_event_attachment_upload_create(
  payload
) {
  return femodulestrialAPI.post(
    `/modules/blackbaud/event/create_event_attachment_upload/`,
    payload
  )
}
function modules_blackbaud_event_create_event_category_create(payload) {
  return femodulestrialAPI.post(
    `/modules/blackbaud/event/create_event_category/`,
    payload
  )
}
function modules_blackbaud_event_create_event_fee_create(payload) {
  return femodulestrialAPI.post(
    `/modules/blackbaud/event/create_event_fee/${payload.event_id}/`,
    payload
  )
}
function modules_blackbaud_event_create_event_participant_create(payload) {
  return femodulestrialAPI.post(
    `/modules/blackbaud/event/create_event_participant/${payload.event_id}/`,
    payload
  )
}
function modules_blackbaud_event_create_event_participant_for_attending_event_create(
  payload
) {
  return femodulestrialAPI.post(
    `/modules/blackbaud/event/create_event_participant_for_attending_event/${payload.event_id}/`
  )
}
function modules_blackbaud_event_create_event_participant_option_create(
  payload
) {
  return femodulestrialAPI.post(
    `/modules/blackbaud/event/create_event_participant_option/${payload.event_id}/`,
    payload
  )
}
function modules_blackbaud_event_create_gift_create(payload) {
  return femodulestrialAPI.post(
    `/modules/blackbaud/event/create_gift/`,
    payload
  )
}
function modules_blackbaud_event_create_participant_donation_create(payload) {
  return femodulestrialAPI.post(
    `/modules/blackbaud/event/create_participant_donation/${payload.participant_id}/`
  )
}
function modules_blackbaud_event_create_participant_fee_create(payload) {
  return femodulestrialAPI.post(
    `/modules/blackbaud/event/create_participant_fee/${payload.participant_id}/`,
    payload
  )
}
function modules_blackbaud_event_create_participant_fee_payment_create(
  payload
) {
  return femodulestrialAPI.post(
    `/modules/blackbaud/event/create_participant_fee_payment/${payload.participant_id}/`,
    payload
  )
}
function modules_blackbaud_event_create_participant_level_create(payload) {
  return femodulestrialAPI.post(
    `/modules/blackbaud/event/create_participant_level/`,
    payload
  )
}
function modules_blackbaud_event_create_participant_option_create(payload) {
  return femodulestrialAPI.post(
    `/modules/blackbaud/event/create_participant_option/${payload.participant_id}/`,
    payload
  )
}
function modules_blackbaud_event_delete_event_destroy(payload) {
  return femodulestrialAPI.delete(
    `/modules/blackbaud/event/delete_event/${payload.event_id}/`
  )
}
function modules_blackbaud_event_delete_event_category_destroy(payload) {
  return femodulestrialAPI.delete(
    `/modules/blackbaud/event/delete_event_category/${payload.event_category_id}/`
  )
}
function modules_blackbaud_event_delete_event_fee_destroy(payload) {
  return femodulestrialAPI.delete(
    `/modules/blackbaud/event/delete_event_fee/${payload.fee_id}/`
  )
}
function modules_blackbaud_event_delete_event_participant_option_destroy(
  payload
) {
  return femodulestrialAPI.delete(
    `/modules/blackbaud/event/delete_event_participant_option/`
  )
}
function modules_blackbaud_event_delete_gift_destroy(payload) {
  return femodulestrialAPI.delete(
    `/modules/blackbaud/event/delete_gift/${payload.gift_id}/`
  )
}
function modules_blackbaud_event_delete_participant_destroy(payload) {
  return femodulestrialAPI.delete(
    `/modules/blackbaud/event/delete_participant/${payload.participant_id}/`
  )
}
function modules_blackbaud_event_delete_participant_donation_destroy(payload) {
  return femodulestrialAPI.delete(
    `/modules/blackbaud/event/delete_participant_donation/${payload.participant_donation_id}/`
  )
}
function modules_blackbaud_event_delete_participant_fee_destroy(payload) {
  return femodulestrialAPI.delete(
    `/modules/blackbaud/event/delete_participant_fee/${payload.participant_fee_id}/`
  )
}
function modules_blackbaud_event_delete_participant_fee_payment_destroy(
  payload
) {
  return femodulestrialAPI.delete(
    `/modules/blackbaud/event/delete_participant_fee_payment/${payload.participant_fee_payment_id}/`
  )
}
function modules_blackbaud_event_delete_participant_level_destroy(payload) {
  return femodulestrialAPI.delete(
    `/modules/blackbaud/event/delete_participant_level/${payload.participation_level_id}/`
  )
}
function modules_blackbaud_event_delete_participant_option_destroy(payload) {
  return femodulestrialAPI.delete(
    `/modules/blackbaud/event/delete_participant_option/`
  )
}
function modules_blackbaud_event_details_retrieve(payload) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/event/details/${payload.event_id}/`
  )
}
function modules_blackbaud_event_edit_event_partial_update(payload) {
  return femodulestrialAPI.patch(
    `/modules/blackbaud/event/edit_event/${payload.event_id}/`,
    payload
  )
}
function modules_blackbaud_event_edit_event_category_partial_update(payload) {
  return femodulestrialAPI.patch(
    `/modules/blackbaud/event/edit_event_category/${payload.event_category_id}/`,
    payload
  )
}
function modules_blackbaud_event_edit_event_fee_partial_update(payload) {
  return femodulestrialAPI.patch(
    `/modules/blackbaud/event/edit_event_fee/${payload.fee_id}/`,
    payload
  )
}
function modules_blackbaud_event_edit_event_participant_option_partial_update(
  payload
) {
  return femodulestrialAPI.patch(
    `/modules/blackbaud/event/edit_event_participant_option/`,
    payload
  )
}
function modules_blackbaud_event_edit_participant_details_partial_update(
  payload
) {
  return femodulestrialAPI.patch(
    `/modules/blackbaud/event/edit_participant_details/${payload.participant_id}/`,
    payload
  )
}
function modules_blackbaud_event_edit_participant_level_partial_update(
  payload
) {
  return femodulestrialAPI.patch(
    `/modules/blackbaud/event/edit_participant_level/${payload.participation_level_id}/`,
    payload
  )
}
function modules_blackbaud_event_edit_participant_option_partial_update(
  payload
) {
  return femodulestrialAPI.patch(
    `/modules/blackbaud/event/edit_participant_option/`,
    payload
  )
}
function modules_blackbaud_event_get_event_attachment_retrieve(payload) {
  return femodulestrialAPI.get(`/modules/blackbaud/event/get_event_attachment/`)
}
function modules_blackbaud_event_get_event_attachment_tags_retrieve(payload) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/event/get_event_attachment_tags/`
  )
}
function modules_blackbaud_event_get_event_categories_retrieve(payload) {
  return femodulestrialAPI.get(`/modules/blackbaud/event/get_event_categories/`)
}
function modules_blackbaud_event_get_gift_details_retrieve(payload) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/event/get_gift_details/${payload.gift_id}/`
  )
}
function modules_blackbaud_event_get_participant_retrieve(payload) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/event/get_participant/${payload.participant_id}/`
  )
}
function modules_blackbaud_event_get_participant_levels_retrieve(payload) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/event/get_participant_levels/`
  )
}
function modules_blackbaud_event_participants_list_retrieve(payload) {
  return femodulestrialAPI.get(
    `/modules/blackbaud/event/participants_list/${payload.event_id}/`
  )
}
function modules_blackbaud_events_list_retrieve(payload) {
  return femodulestrialAPI.get(`/modules/blackbaud/events/list/`)
}
function rest_auth_login_create(payload) {
  return femodulestrialAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return femodulestrialAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return femodulestrialAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return femodulestrialAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return femodulestrialAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return femodulestrialAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return femodulestrialAPI.post(
    `/rest-auth/registration/resend-email/`,
    payload
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return femodulestrialAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return femodulestrialAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return femodulestrialAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return femodulestrialAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  modules_blackbaud_access_token_create,
  modules_blackbaud_consent_channels_retrieve,
  modules_blackbaud_constituent_create_action_attachment_create,
  modules_blackbaud_constituent_create_constituent_action_create,
  modules_blackbaud_constituent_create_rating_create,
  modules_blackbaud_constituent_create_relationship_create,
  modules_blackbaud_constituent_delete_constituent_action_destroy,
  modules_blackbaud_constituent_delete_constituent_action_attachment_destroy,
  modules_blackbaud_constituent_delete_constituent_action_custom_field_destroy,
  modules_blackbaud_constituent_delete_rating_destroy,
  modules_blackbaud_constituent_delete_relationship_destroy,
  modules_blackbaud_constituent_edit_constituent_aliases_partial_update,
  modules_blackbaud_constituent_edit_relationship_partial_update,
  modules_blackbaud_constituent_get_alias_list_in_single_constituent_retrieve,
  modules_blackbaud_constituent_get_alias_types_retrieve,
  modules_blackbaud_constituent_get_attachment_tags_retrieve,
  modules_blackbaud_constituent_get_constituent_action_attachments_retrieve,
  modules_blackbaud_constituent_get_constituent_action_customfields_categories_retrieve,
  modules_blackbaud_constituent_get_constituent_action_customfields_categories_details_retrieve,
  modules_blackbaud_constituent_get_constituent_action_customfields_list_retrieve,
  modules_blackbaud_constituent_get_constituent_action_list_retrieve,
  modules_blackbaud_constituent_get_constituent_action_location_retrieve,
  modules_blackbaud_constituent_get_constituent_action_status_types_retrieve,
  modules_blackbaud_constituent_get_constituent_action_types_retrieve,
  modules_blackbaud_constituent_get_rating_categories_retrieve,
  modules_blackbaud_constituent_get_rating_list_on_single_constituent_retrieve,
  modules_blackbaud_constituent_get_rating_sources_retrieve,
  modules_blackbaud_constituent_get_rating_values_retrieve,
  modules_blackbaud_constituent_get_relationship_details_retrieve,
  modules_blackbaud_constituent_get_relationship_list_in_all_constituents_retrieve,
  modules_blackbaud_constituent_get_relationship_list_in_single_constituent_retrieve,
  modules_blackbaud_constituent_get_relationship_types_retrieve,
  modules_blackbaud_constituent_get_suffixes_retrieve,
  modules_blackbaud_constituent_get_titles_retrieve,
  modules_blackbaud_constituent_search_retrieve,
  modules_blackbaud_constituent_update_constituent_action_partial_update,
  modules_blackbaud_constituent_update_constituent_action_attachment_partial_update,
  modules_blackbaud_constituent_update_constituent_action_custom_field_partial_update,
  modules_blackbaud_constituent_update_rating_partial_update,
  modules_blackbaud_constituents_constituent_appeal_list_retrieve,
  modules_blackbaud_constituents_constituent_attachment_list_retrieve,
  modules_blackbaud_constituents_constituent_details_retrieve,
  modules_blackbaud_constituents_convert_non_constituent_to_constituent_create,
  modules_blackbaud_constituents_create_address_create,
  modules_blackbaud_constituents_create_alias_collection_create,
  modules_blackbaud_constituents_create_aliases_create,
  modules_blackbaud_constituents_create_attachment_create,
  modules_blackbaud_constituents_create_constituent_create,
  modules_blackbaud_constituents_create_constituent_action_custom_field_create,
  modules_blackbaud_constituents_create_constituent_code_create,
  modules_blackbaud_constituents_create_constituent_custom_field_create,
  modules_blackbaud_constituents_create_constituent_custom_field_collection_create,
  modules_blackbaud_constituents_create_document_create,
  modules_blackbaud_constituents_create_education_create,
  modules_blackbaud_constituents_create_education_custom_field_create,
  modules_blackbaud_constituents_delete_address_details_destroy,
  modules_blackbaud_constituents_delete_aliases_destroy,
  modules_blackbaud_constituents_delete_attachment_destroy,
  modules_blackbaud_constituents_delete_constituent_code_destroy,
  modules_blackbaud_constituents_delete_education_destroy,
  modules_blackbaud_constituents_delete_education_custom_field_destroy,
  modules_blackbaud_constituents_get_address_details_retrieve,
  modules_blackbaud_constituents_get_address_list_retrieve,
  modules_blackbaud_constituents_get_address_list_in_constituents_retrieve,
  modules_blackbaud_constituents_get_address_types_retrieve,
  modules_blackbaud_constituents_get_constituent_code_details_retrieve,
  modules_blackbaud_constituents_get_constituent_code_list_retrieve,
  modules_blackbaud_constituents_get_constituent_code_list_in_constituent_retrieve,
  modules_blackbaud_constituents_get_constituent_custom_field_categories_retrieve,
  modules_blackbaud_constituents_get_constituent_custom_field_categories_details_retrieve,
  modules_blackbaud_constituents_get_constituent_custom_field_categories_values_retrieve,
  modules_blackbaud_constituents_get_constituent_custom_field_list_retrieve,
  modules_blackbaud_constituents_get_constituent_custom_field_list_in_single_constituent_retrieve,
  modules_blackbaud_constituents_get_countries_retrieve,
  modules_blackbaud_constituents_get_currencyconfiguration_retrieve,
  modules_blackbaud_constituents_get_custom_field_list_in_education_retrieve,
  modules_blackbaud_constituents_get_education_custom_field_categories_retrieve,
  modules_blackbaud_constituents_get_education_degrees_retrieve,
  modules_blackbaud_constituents_get_education_list_retrieve,
  modules_blackbaud_constituents_get_education_list_in_constituent_retrieve,
  modules_blackbaud_constituents_get_education_record_retrieve,
  modules_blackbaud_constituents_get_education_schools_retrieve,
  modules_blackbaud_constituents_get_education_statuses_retrieve,
  modules_blackbaud_constituents_get_education_subjects_retrieve,
  modules_blackbaud_constituents_get_education_types_retrieve,
  modules_blackbaud_constituents_list_retrieve,
  modules_blackbaud_constituents_update_constituent_address_partial_update,
  modules_blackbaud_event_get_event_attachment_list_retrieve,
  modules_blackbaud_event_get_event_fees_retrieve,
  modules_blackbaud_event_get_event_participant_options_retrieve,
  modules_blackbaud_event_get_event_participant_donation_retrieve,
  modules_blackbaud_event_get_event_participant_fee_payments_retrieve,
  modules_blackbaud_event_get_event_participant_fees_retrieve,
  modules_blackbaud_event_get_participant_options_retrieve,
  modules_blackbaud_event_create_event_create,
  modules_blackbaud_event_create_event_attachment_create,
  modules_blackbaud_event_create_event_attachment_upload_create,
  modules_blackbaud_event_create_event_category_create,
  modules_blackbaud_event_create_event_fee_create,
  modules_blackbaud_event_create_event_participant_create,
  modules_blackbaud_event_create_event_participant_for_attending_event_create,
  modules_blackbaud_event_create_event_participant_option_create,
  modules_blackbaud_event_create_gift_create,
  modules_blackbaud_event_create_participant_donation_create,
  modules_blackbaud_event_create_participant_fee_create,
  modules_blackbaud_event_create_participant_fee_payment_create,
  modules_blackbaud_event_create_participant_level_create,
  modules_blackbaud_event_create_participant_option_create,
  modules_blackbaud_event_delete_event_destroy,
  modules_blackbaud_event_delete_event_category_destroy,
  modules_blackbaud_event_delete_event_fee_destroy,
  modules_blackbaud_event_delete_event_participant_option_destroy,
  modules_blackbaud_event_delete_gift_destroy,
  modules_blackbaud_event_delete_participant_destroy,
  modules_blackbaud_event_delete_participant_donation_destroy,
  modules_blackbaud_event_delete_participant_fee_destroy,
  modules_blackbaud_event_delete_participant_fee_payment_destroy,
  modules_blackbaud_event_delete_participant_level_destroy,
  modules_blackbaud_event_delete_participant_option_destroy,
  modules_blackbaud_event_details_retrieve,
  modules_blackbaud_event_edit_event_partial_update,
  modules_blackbaud_event_edit_event_category_partial_update,
  modules_blackbaud_event_edit_event_fee_partial_update,
  modules_blackbaud_event_edit_event_participant_option_partial_update,
  modules_blackbaud_event_edit_participant_details_partial_update,
  modules_blackbaud_event_edit_participant_level_partial_update,
  modules_blackbaud_event_edit_participant_option_partial_update,
  modules_blackbaud_event_get_event_attachment_retrieve,
  modules_blackbaud_event_get_event_attachment_tags_retrieve,
  modules_blackbaud_event_get_event_categories_retrieve,
  modules_blackbaud_event_get_gift_details_retrieve,
  modules_blackbaud_event_get_participant_retrieve,
  modules_blackbaud_event_get_participant_levels_retrieve,
  modules_blackbaud_event_participants_list_retrieve,
  modules_blackbaud_events_list_retrieve,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
