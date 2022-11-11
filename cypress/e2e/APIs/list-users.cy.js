import * as getUsers from '../../service/users'
import * as responseList from '../../models/response/resListUsers'
import * as response from '../../fixtures/responses/resDataListUsers.json'
import 'lodash'

describe('GET List Users', () => {
    it('List users page 1', () => {
        getUsers.listUsers({
            page: 1})
            .then((res) => {
            const expectedResponse = responseList.resListUsers1(response["res_list_user_page_1"])
            expect(res.status).to.eq(200)
            expect(res.body.page).to.eq(expectedResponse.page)
            expect(res.body.per_page).to.eq(expectedResponse.per_page)
            expect(res.body.total).to.eq(expectedResponse.total)
            expect(res.body.total_pages).to.eq(expectedResponse.total_pages)
            expect(res.body.data[0].id).to.eq(expectedResponse.data.id)
            expect(res.body.data[0].email).to.eq(expectedResponse.data.email)
            expect(res.body.data[0].first_name).to.eq(expectedResponse.data.first_name)
            expect(res.body.data[0].last_name).to.eq(expectedResponse.data.last_name)
            expect(res.body.data[0].avatar).to.eq(expectedResponse.data.avatar)
        })
    })

    it('List users per page 1', () => {
        getUsers.listUsers({
            per_page: 1})
            .then((res) => {
            const expectedResponse = responseList.resListUsers1(response["res_list_user_per_page_1"])
            expect(res.status).to.eq(200)
            expect(res.body.page).to.eq(expectedResponse.page)
            expect(res.body.per_page).to.eq(expectedResponse.per_page)
            expect(res.body.total).to.eq(expectedResponse.total)
            expect(res.body.total_pages).to.eq(expectedResponse.total_pages)
            expect(res.body.data[0].id).to.eq(expectedResponse.data.id)
            expect(res.body.data[0].email).to.eq(expectedResponse.data.email)
            expect(res.body.data[0].first_name).to.eq(expectedResponse.data.first_name)
            expect(res.body.data[0].last_name).to.eq(expectedResponse.data.last_name)
            expect(res.body.data[0].avatar).to.eq(expectedResponse.data.avatar)
        })
    })

    it('List users page 2 and per page 2', () => {
        getUsers.listUsers({
            page: 2,
            per_page: 2,})
            .then((res) => {
            const expectedResponse = responseList.resListUsers1(response["res_list_user_page_2_per_page_2"])
            expect(res.status).to.eq(200)
            expect(res.body.page).to.eq(expectedResponse.page)
            expect(res.body.per_page).to.eq(expectedResponse.per_page)
            expect(res.body.total).to.eq(expectedResponse.total)
            expect(res.body.total_pages).to.eq(expectedResponse.total_pages)
            for(let i=0; i<2; i++){
                expect(res.body.data[i].id).to.eq(expectedResponse.data[i].id)
                expect(res.body.data[i].email).to.eq(expectedResponse.data[i].email)
                expect(res.body.data[i].first_name).to.eq(expectedResponse.data[i].first_name)
                expect(res.body.data[i].last_name).to.eq(expectedResponse.data[i].last_name)
                expect(res.body.data[i].avatar).to.eq(expectedResponse.data[i].avatar)
            }
        })
    })

    it('List users id 1', () => {
        getUsers.listUsers({
            id: 1})
            .then((res) => {
            const expectedResponse = responseList.resListUsers2(response["res_list_user"])
            expect(res.status).to.eq(200)
            expect(res.body.data.id).to.eq(expectedResponse.data.id)
            expect(res.body.data.email).to.eq(expectedResponse.data.email)
            expect(res.body.data.first_name).to.eq(expectedResponse.data.first_name)
            expect(res.body.data.last_name).to.eq(expectedResponse.data.last_name)
            expect(res.body.data.avatar).to.eq(expectedResponse.data.avatar)
        })
    })

    it('List users id 9999', () => {
        getUsers.listUsers({
            id: 9999})
            .then((res) => {
            expect(res.status).to.eq(404)
            expect(res.body).to.be.empty
        })
    })
})