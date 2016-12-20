import {
    RECEIVE_COLLECTS,
    POST_COLLECTS,
    CHANGE_COLLECT_TAG
} from '../mutation-types'

export default {
  state: {
    collects:{},
    current_tag:"website"

  },
  mutations: {
    [RECEIVE_COLLECTS](state,list) {
      if(!state.collects[state.current_tag]){
        state.collects[state.current_tag]=[]
      }
      state.collects[state.current_tag]=state.collects[state.current_tag].concat(list)

    },
    [POST_COLLECTS](state, data) {
      console.log()
      state.collects[state.current_tag] = [data].concat(state.collects[state.current_tag])
    },

    [CHANGE_COLLECT_TAG](state, tag) {

      state.current_tag = tag
    }
  },
  actions: {
    // ensure data for rendering given list type
    getCollects: ({commit, dispatch, state}, config) => {

      var Collect = Kevio.Object.extend("collect");
      var query = new Kevio.Query(Collect);
      query.descending("_created_at");
     console.log(state.current_tag)
      if(state.current_tag){
        query.equalTo("tag", state.current_tag);
      }


      return query.find({
        success: function(results) {
          var items=[]
          for (var i = 0; i < results.length; i++) {
            var object = results[i];

            items.push(object.toJSON())
            // console.log(object.id + ' - ' + object.get('playerName'));
          }
          commit(RECEIVE_COLLECTS, items)
        },
        error: function(error) {
          alert("Error: " + error.code + " " + error.message);
        }
      });
    },

    // ensure all active items are fetched
    postCollect: ({commit,dispatch, getters},collect) => {
      return  commit(POST_COLLECTS, collect)
    },
  },
  getters: {
    getCollects: state => state.collects[state.current_tag],
    getCollectsTag: state => state.current_tag
  }
}
