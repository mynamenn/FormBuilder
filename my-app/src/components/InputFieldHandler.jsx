import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/index.css';


export default function InputFieldHandler({ content, type, inputField, listValues }) {
    const Regex = {
        'String': "^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$",
        'Email': "^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$",
        'Phone Number': "^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$",
        'Float': "^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$",
        'Integer': "^[+]?([0-9]+(?:[\][0-9]*)?|\[0-9]+)$",
        'Maximum Frequency': "^[0-9]?[0-9]?[0-9]$"
    }

    const bankList = ['Affin Bank', 'CIMB Clicks', 'Bank Islam', 'Hong Leong Bank',
        'HSBC Bank', 'Maybank2U', 'Maybank2U', 'OCBC Bank', 'Public Bank', 'SBI Bank A'
        , 'SBI Bank B', 'SBI Bank C'];

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
                    placeholder={content}
                    pattern={Regex[type]} required
                    onChange={updateVal.bind(this, type, content)} className="inputMain" />
                <br />
                <span id={combineId(content)} class="errorSpan"></span>
            </div>
        )
    } else if (inputField === 'BankList') {
        return (
            <div>
                <select id={content} name={content} className="fieldSelectBox" required>
                    <option value="">Bank Name*</option>
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
                <label htmlFor={content} className='item-title'>{content}*</label>
                <br />
                <select id={content} name={content} className="fieldSelectBox" required>
                    {listValues.map((value) =>
                        <option value={value}>{value}</option>
                    )}
                </select>
            </div>
        )
    } else if (inputField === 'Frequency') {
        return (
            <div>
                <label htmlFor={content} className='item-title'>{content}*</label>
                <br />
                <select id={content} name={content} className="fieldSelectBox" required>
                    <option value="YEARLY">YEARLY</option>
                    <option value="MONTHLY" defaultValue>MONTHLY</option>
                    <option value="WEEKLY">WEEKLY</option>
                    <option value="DAILY">DAILY</option>
                </select>
            </div>
        )
    } else if (inputField === 'BusinessModel') {
        return (
            <div>
                <label htmlFor={content} className='item-title'>{content}*</label>
                <br />
                <select id={content} name={content} className="fieldSelectBox" required>
                    <option value="B2C" defaultValue>B2C</option>
                    <option value="B2B1">B2B1</option>
                </select>
            </div>
        )
    } else if (inputField === 'Date') {
        return (
            <div>
                <label htmlFor={content} className='item-title'>{content}*</label>
                <br />
                <input type="date" id={content} />
            </div>
        )
    } else if (inputField === 'idType') {
        return (
            <div>
                <label htmlFor={content} className='item-title'>{content}*</label>
                <br />
                <select id={content} name={content} className="fieldSelectBox" required>
                    <option value="PASSPORT_NUMBER" defaultValue>Passport Number</option>
                    <option value="NRIC">NRIC</option>
                    <option value="BUSINESS_REGISTRATION_NUMBER">Business Registration Number</option>
                    <option value="OTHERS">Others</option>
                </select>
            </div>
        )
    }

}
