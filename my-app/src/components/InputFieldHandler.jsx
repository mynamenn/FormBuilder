import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/index.css';


export default function InputFieldHandler({ content, type, inputField, listValues }) {
    const Regex = {
        'String': "^[a-z ,.'-]+$",
        'Email': "^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$",
        'Phone Number': "^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$",
        'Float': "^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$",
        'Integer': "^[+]?([0-9]+(?:[\][0-9]*)?|\[0-9]+)$"
    }

    const bankList = ['CIMB', 'HSBC', 'Maybank', 'Bank Negara', 'Barclays']

    const combineId = (Id) => {
        return 'alert' + Id;
    }

    const updateVal = (type, Id, e) => {
        var val = document.getElementById(Id).value;
        var reg = new RegExp(Regex[type]);
        var alertId = combineId(Id);

        if (reg.test(val)) {
            document.getElementById(alertId).innerHTML = '';
            return true;
        } else {
            document.getElementById(alertId).innerHTML = 'Invalid ' + Id + '.';
            return true;
        }
    }

    if (inputField === 'TextField') {
        return (
            <div>
                <input type="text" size="20" id={content} name={content}
                    placeholder={`Please enter your ${content.toLowerCase()}`}
                    pattern={Regex[type]} required
                    onChange={updateVal.bind(this, type, content)} />
                <br />
                <span id={combineId(content)} class="errorSpan"></span>
            </div>
        )
    } else if (inputField === 'BankList') {
        return (
            <div>
                <select id={content} name={content} required>
                    {bankList.map((bankName) =>
                        <option value={bankName}>{bankName}</option>
                    )}
                </select>
            </div>
        )
    } else if (inputField === 'Checkbox') {
        return (
            <div>
                <input type="checkbox" id={content} value="checkboxVal" />
                <label for={content} className='item-title'>&ensp; {content}</label>

            </div>
        )
    } else if (inputField === 'DropDownList') {
        return (
            <div>
                <select id={content} name={content} required>
                    {listValues.map((value) =>
                        <option value={value}>{value}</option>
                    )}
                </select>
            </div>
        )
    }

}
