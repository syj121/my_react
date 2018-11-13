//= require_tree ./components

function get_ajax_data(url, query, callback){
    $.ajax({
      url: url,
      type: "GET",
      data: query,
      success: function(data) {
        if (callback) {
          callback(data)
        }
      }
    })
}

// 跳转页面的方法
function redirect_url(url) {
  window.location.href = url
}