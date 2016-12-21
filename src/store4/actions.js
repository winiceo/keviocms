/* global document, window */

import * as types from './mutation-types'

// import toastr from 'toastr'
// toastr.options.positionClass = 'toast-top-center'

export const gProgress = ({commit}, num) => {
    commit(types.GLOBAL_PROGRESS, num)
}

// export const showMsg = ({commit}, config) => {
//     let content, type
//     if (typeof config === 'string') {
//         content = config
//         type = 'error'
//     } else {
//         content = config.content
//         type = config.type
//     }
//     toastr[type](content)
// }
//
// export const hideMsg = () => {
//     toastr.clear()
// }

export const getCollects = ({commit, state: {route: { path }},getters}, config) => {

    var Collect = Kevio.Object.extend("collect");
    var query = new Kevio.Query(Collect);
    query.descending("_created_at");
    alert(getters.getCollectsTAG)
    if(getters.getCollectsTAG){
        query.equalTo("tag", getters.getCollectsTAG);
    }


    return query.find({
        success: function(results) {
            var items=[]
            for (var i = 0; i < results.length; i++) {
                var object = results[i];

                items.push(object.toJSON())
                // console.log(object.id + ' - ' + object.get('playerName'));
            }
            commit(types.RECEIVE_COLLECTS, items)
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });

}

export const postCollect = ({ commit }, collect) => {


    commit(types.POST_COLLECTS, collect)
}

export const changeCollectTag = ({commit}, tag) => {

    commit(types.CHANGE_COLLECT_TAG, tag)

}

//
// export const getArticle = ({ commit, state: {route: { params: { id }}} }) => {
//     return api.getFromConfig({
//         action: "article",
//         markdown: 1,
//         id
//     }).then(json => {
//         commit(types.RECEIVE_ARTICLE, {
//             ...json
//         })
//     })
// }
//
// export const getComment = ({ commit, state: {route: { path, params: { id }}} }, { page, limit }) => {
//     return api.getFromConfig({
//         action: "comment",
//         page,
//         id,
//         limit
//     }).then(({ data }) => {
//         commit(types.RECEIVE_COMMENT, {
//             ...data,
//             page,
//             path
//         })
//     })
// }
//

// export const getAdminTopics = ({commit, state: {route: { path, params: { page } }}}, config) => {
//     config.page = page
//     return api.getFromConfig(config).then(({ data }) => {
//         commit(types.RECEIVE_ADMIN_TOPICS, {
//             ...data,
//             path
//         })
//     })
// }
// export const getAdminArticle = ({ state: {route: { params: { id }}} }) => {
//     return api.getFromConfig({
//         action: "getArticle",
//         id
//     })
// }
//
// export const deleteArticle = ({commit}, config) => {
//     api.getFromConfig(config).then(() => {
//         commit(types.DELETE_ARTICLE, config.id)
//     })
// }
//
// export const recoverArticle = ({commit}, config) => {
//     api.getFromConfig(config).then(() => {
//         commit(types.RECOVER_ARTICLE, config.id)
//     })
// }
