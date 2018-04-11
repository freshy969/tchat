require 'test_helper'

class MessagethreadsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get messagethreads_create_url
    assert_response :success
  end

  test "should get show" do
    get messagethreads_show_url
    assert_response :success
  end

  test "should get index" do
    get messagethreads_index_url
    assert_response :success
  end

end
