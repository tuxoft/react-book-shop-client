import React from "react";
import * as styles from "./styles";
import {MdClear} from 'react-icons/lib/md/';
import Checkbox from "../simpleComponents/Checkbox";
import Autosuggest from 'react-autosuggest';


const ObjectEdit = ({
                        object,
                        data,
                        options,
                        setObjAttr,
                        removeObjFromListAttr,
                        addObjToListAttr,
                        saveChangeObjectEdit,
                        cancelChangeObjectEdit,
                        searchInDictionary,
                        clearSuggest,
                        setImage,
                        addObjWithOrder,
                        removeObjWithOrder,
                        getTitle,
                        suggestValues,
                        setSuggestValue,
                        objectInfo
                    }) => {

    const getInput = (indx, name, parametrName, object, setObjAttr, valueType) => {
        return (<styles.Row key={indx ? "row" + indx : "row"}>
            <styles.RowItem>
                <styles.Label bold>{parametrName}</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Input
                    valueType={valueType}
                    onChange={(val) => {
                        setObjAttr(name, val.target.value)
                    }}
                    value={object[name] ? object[name] : ""}/>
            </styles.RowItem>
        </styles.Row>)
    };

    const getMultiObjFromList = (indx, name, dictionary, parametrName, object, data, removeObjFromListAttr, addObjToListAttr, searchInDictionary, clearSuggest) => {
        console.log(parametrName, data[dictionary]);
        return (<styles.Row key={indx ? "row" + indx : "row"}>
            <styles.RowItem>
                <styles.Label bold>{parametrName}</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Column>

                    <Autosuggest id={"Autosuggest-"+name}
                        suggestions={data[dictionary]}
                        onSuggestionsFetchRequested={({value}) => {
                            searchInDictionary(dictionary, value)
                        }}
                        onSuggestionsClearRequested={() => {
                            clearSuggest(dictionary, name);
                            //searchInDictionary(dictionary, "");
                        }}
                        getSuggestionValue={(obj) => obj.name}
                        onSuggestionSelected={(event, {suggestion, suggestionValue, suggestionIndex, sectionIndex, method}) => {
                            addObjToListAttr(name, object[name], suggestion);
                        }}
                        focusInputOnSuggestionClick={false}
                        renderSuggestion={(obj, indx) => (<styles.Line key={name + indx} >
                            {obj.name}
                        </styles.Line>)}
                        inputProps={{
                            placeholder: '',
                            value: !suggestValues[name] ? "" : suggestValues[name],
                            onChange: (event, { newValue, method }) => {
                                console.log("onChange", newValue, event.target.value);
                                searchInDictionary(dictionary, event.target.value? event.target.value : "");
                                setSuggestValue(event.target.value? event.target.value : "", name);
                            },
                            onBlur: (event, { highlightedSuggestion })=>{console.log("onBlur", highlightedSuggestion);}
                        }}
                        renderInputComponent={inputProps => (<styles.InputWrapper>
                            <styles.Container>
                                {object[name] && object[name].map((obj, indx) => <styles.Item key={indx}>
                                    <styles.Label white fs14 ellipsis title={obj.name}>{obj.name}</styles.Label>
                                    <MdClear onClick={() => removeObjFromListAttr(name, object[name], obj)}/>
                                </styles.Item>)}
                            </styles.Container>
                            <styles.InputSuggest {...inputProps}
                                                 id={name}
                            />
                        </styles.InputWrapper>)}
                                 theme={{
                                     suggestionsList: {
                                         width: "600px",
                                         padding: 0,
                                         listStyleType: "none"
                                     },
                                     suggestion: {
                                         cursor: "pointer",
                                         boxSizing: "border-box",
                                         width: "100%",
                                         backgroundColor: "#fff",
                                     },
                                     suggestionHighlighted: {
                                         backgroundColor: "#dfd",
                                         width: "100%"
                                     }
                                 }}
                    />
                </styles.Column>
            </styles.RowItem>
        </styles.Row>)
    };

    const getMultiObjWithOrderFromList = (indx, name, dictionary, parametrName, object, data, addObjWithOrder, removeObjWithOrder, searchInDictionary, getTitle, clearSuggest) => {
        return (<styles.Row key={indx ? "row" + indx : "row"}>
            <styles.RowItem>
                <styles.Label bold>{parametrName}</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>

                <Autosuggest id={"Autosuggest-"+name}
                             suggestions={data[dictionary]}
                             onSuggestionsFetchRequested={({value}) => {
                                 searchInDictionary(dictionary, value)
                             }}
                             onSuggestionsClearRequested={() => {
                                 clearSuggest(dictionary, name);
                                 //searchInDictionary(dictionary, "");
                             }}
                             getSuggestionValue={(obj) => getTitle(obj)}
                             onSuggestionSelected={(event, {suggestion, suggestionValue, suggestionIndex, sectionIndex, method}) => {
                                 addObjWithOrder(object[name], suggestion);
                             }}
                             focusInputOnSuggestionClick={false}
                             renderSuggestion={(obj, indx) => (<styles.Line key={name + indx} >
                                 {obj.name}
                             </styles.Line>)}
                             inputProps={{
                                 placeholder: '',
                                 value: !suggestValues[name] ? "" : suggestValues[name],
                                 onChange: (event, { newValue, method }) => {
                                     console.log("onChange", newValue, event.target.value);
                                     searchInDictionary(dictionary, event.target.value? event.target.value : "");
                                     setSuggestValue(event.target.value? event.target.value : "", name);
                                 },
                                 onBlur: (event, { highlightedSuggestion })=>{console.log("onBlur", highlightedSuggestion);}
                             }}
                             renderInputComponent={inputProps => (<styles.InputWrapper>
                                 <styles.Container>
                                     {object[name] && object[name].map((obj, indx) => <styles.Item key={indx}>
                                         <styles.Label white fs14 ellipsis title={getTitle(obj.author)}>{getTitle(obj.author)}</styles.Label>
                                         <MdClear onClick={() => removeObjWithOrder(object[name], obj)}/>
                                     </styles.Item>)}
                                 </styles.Container>
                                 <styles.InputSuggest {...inputProps}
                                                      id={name}
                                 />
                             </styles.InputWrapper>)}
                             theme={{
                                 suggestionsList: {
                                     width: "600px",
                                     padding: 0,
                                     listStyleType: "none"
                                 },
                                 suggestion: {
                                     cursor: "pointer",
                                     boxSizing: "border-box",
                                     width: "100%",
                                     backgroundColor: "#fff",
                                 },
                                 suggestionHighlighted: {
                                     backgroundColor: "#dfd",
                                     width: "100%"
                                 }
                             }}
                />
            </styles.RowItem>
        </styles.Row>)
    };

    const getOneFromList = (indx, name, dictionary, parametrName, object, data, setObjAttr, searchInDictionary, clearSuggest) => {
        console.log("object", object);
        console.log("name", name);
        const disabled = (name === "bookSeries" && (object.publisher == null || object.publisher && object.publisher.id == null)) ? true : false;
        return (<styles.Row key={indx ? "row" + indx : "row"}>
            <styles.RowItem>
                <styles.Label bold>{parametrName}</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>

                <Autosuggest id={"Autosuggest-"+name}
                             suggestions={data[dictionary]}
                             onSuggestionsFetchRequested={({value}) => {
                                 searchInDictionary(dictionary, value)
                             }}
                             onSuggestionsClearRequested={() => {
                                 clearSuggest(dictionary, name);
                             }}
                             getSuggestionValue={(obj) => obj.name}
                             onSuggestionSelected={(event, {suggestion, suggestionValue, suggestionIndex, sectionIndex, method}) => {
                                 setObjAttr(name, suggestion)
                             }}
                             focusInputOnSuggestionClick={false}
                             renderSuggestion={(obj, indx) => (<styles.Line key={name + indx} >
                                 {obj.name}
                             </styles.Line>)}
                             inputProps={{
                                 placeholder: '',
                                 value: !suggestValues[name] ? "" : suggestValues[name],
                                 onChange: (event, { newValue, method }) => {
                                     console.log("onChange", newValue, event.target.value);
                                     searchInDictionary(dictionary, event.target.value? event.target.value : "");
                                     setSuggestValue(event.target.value? event.target.value : "", name);
                                 },
                                 onBlur: (event, { highlightedSuggestion })=>{console.log("onBlur", highlightedSuggestion);}
                             }}
                             renderInputComponent={inputProps => (<styles.InputWrapper>
                                 <styles.Container>
                                     {object[name] && object[name].name && <styles.Item>{object[name].name}</styles.Item>}
                                 </styles.Container>
                                 <styles.InputSuggest {...inputProps}
                                                      id={name}
                                                      disabled={disabled}
                                                      placeholder={disabled ? "Выберите издателя" : ""}
                                 />
                             </styles.InputWrapper>)}
                             theme={{
                                 suggestionsList: {
                                     width: "600px",
                                     padding: 0,
                                     listStyleType: "none"
                                 },
                                 suggestion: {
                                     cursor: "pointer",
                                     boxSizing: "border-box",
                                     width: "100%",
                                     backgroundColor: "#fff",
                                 },
                                 suggestionHighlighted: {
                                     backgroundColor: "#dfd",
                                     width: "100%"
                                 }
                             }}
                />
            </styles.RowItem>
        </styles.Row>)
    };

    const getCheckBox = (indx, name, dictionary, parametrName, object, setObjAttr) => {
        return (<styles.Row key={indx ? "row" + indx : "row"}>
            <styles.RowItem>
                <styles.Label bold>{parametrName}</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <Checkbox isCheckedControl isChecked={object[name]}
                          labelText="" onClick={() => {
                    setObjAttr(name, !object[name])
                }}/>
            </styles.RowItem>
        </styles.Row>)
    };

    const getSelect = (indx, name, dictionary, parametrName, object, data, setObjAttr) => {
        return (<styles.Row key={indx ? "row" + indx : "row"}>
            <styles.RowItem>
                <styles.Label bold>{parametrName}</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Select
                    onChange={(e) => {
                        setObjAttr(name, data[dictionary].find((pub, indx) => pub.id === Number(e.target.value)))
                    }
                    }
                    value={object[name] ? object[name].id : ""}>
                    <option disabled value={""}>выберите значение</option>
                    {data[dictionary].map((item, indx) =>
                        <option key={item.id} value={item.id}>
                            {item.name}
                        </option>)}
                </styles.Select>
            </styles.RowItem>
        </styles.Row>)
    };

    const getTextArea = (indx, name, parametrName, object, setObjAttr) => {
        return (<styles.Row key={indx ? "row" + indx : "row"}>
            <styles.RowItem>
                <styles.Label bold>{parametrName}</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.InputText
                    onChange={(val) => {
                        setObjAttr(name, val.target.value)
                    }} value={object[name] ? object[name] : ""}/>
            </styles.RowItem>
        </styles.Row>)
    };

    const getInputImage = (indx, name, parametrName, object, setObjAttr, setImage) => {
        return (<styles.Row key={indx ? "row" + indx : "row"}>
            <styles.RowItem>
                <styles.Label bold>{parametrName}</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Column>
                    <styles.CoverImage src={object[name]}/>
                    <styles.UploadButton
                        onChange={(val) => {
                            setImage(val, name)
                        }}
                        label={
                            object[name] == null
                                ? "Добавить изображение"
                                : "Изменить изображение"
                        }
                        deleteButtonVisible={object[name]}
                        onDelete={() => setObjAttr(name, null)}
                        deleteLabel={"Удалить изображение"}
                    />
                </styles.Column>
            </styles.RowItem>
        </styles.Row>)
    };

    return (
        <styles.ContentWrapper>
            <styles.Label bold>{objectInfo.pageItemTitle}</styles.Label>
            <styles.ButtonRow>
                <styles.Button blue onClick={saveChangeObjectEdit}>Сохранить</styles.Button>
                <styles.Button blue onClick={cancelChangeObjectEdit}>Отмена</styles.Button>
            </styles.ButtonRow>
            {options.map((option, indx) => {
                switch (option.type) {
                    case "checkBox":
                        return getCheckBox(indx, option.name, option.dictionary ? option.dictionary : option.name, option.parametrName, object, setObjAttr);
                    case "oneFromList":
                        return getOneFromList(indx, option.name, option.dictionary ? option.dictionary : option.name, option.parametrName, object, data, setObjAttr, searchInDictionary, clearSuggest);
                    case "select":
                        return getSelect(indx, option.name, option.dictionary ? option.dictionary : option.name, option.parametrName, object, data, setObjAttr);
                    case "input":
                        return getInput(indx, option.name, option.parametrName, object, setObjAttr, option.valueType);
                    case "textArea":
                        return getTextArea(indx, option.name, option.parametrName, object, setObjAttr);
                    case "multiObjFromList":
                        return getMultiObjFromList(indx, option.name, option.dictionary ? option.dictionary : option.name, option.parametrName, object, data, removeObjFromListAttr, addObjToListAttr, searchInDictionary, clearSuggest);
                    case "authors":
                        return getMultiObjWithOrderFromList(indx, option.name, option.dictionary ? option.dictionary : option.name, option.parametrName, object, data, addObjWithOrder, removeObjWithOrder, searchInDictionary, getTitle, clearSuggest);
                    case "inputImage":
                        return getInputImage(indx, option.name, option.parametrName, object, setObjAttr, setImage)
                    default:
                        return (<b>Unresolved Type</b>);
                }
            })}
        </styles.ContentWrapper>
    );
};

export default ObjectEdit;
