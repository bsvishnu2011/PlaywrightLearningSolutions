import {test, expect} from '@playwright/test'
import datas from './test-data/279_data.json'

test("Getting data from json", async({page})=>{
    console.log(datas.name);
    console.log(datas.age);
})