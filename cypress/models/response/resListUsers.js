function resListUsers1(res_list_user){
    return{
        "page": res_list_user.page,
        "per_page": res_list_user.per_page,
        "total": res_list_user.total,
        "total_pages": res_list_user.total_pages,
        "data": res_list_user.data_users
    }
}

function resListUsers2(res_list_user){
    return{
        "data": {
            "id": res_list_user.id,
            "email": res_list_user.email,
            "first_name": res_list_user.first_name,
            "last_name": res_list_user.last_name,
            "avatar": res_list_user.avatar
        }
    }
}

export {resListUsers1,
        resListUsers2}