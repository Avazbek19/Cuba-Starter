import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { TiArrowMaximise, TiArrowMinimise } from 'react-icons/ti';
import { MdOutlinePlaylistRemove } from 'react-icons/md';
import { IoReloadOutline } from 'react-icons/io5';

export default function CAddField() {
    const [fields, setFields] = useState([
        {
            id: 1,
            svernut: false,
        },
    ]);

    const addField = () => {
        const newIndex = fields.length === 0 ? 1 : fields[fields.length - 1].id + 1;
        setFields([...fields, { id: newIndex, svernut: false }]);
    };

    const removeField = (id) => {
        const updatedFields = fields.filter((field) => field.id !== id);
        setFields(updatedFields);
    };

    const updateFieldText = (id, newText) => {
        const updatedFields = fields.map((field) =>
            field.id === id ? { ...field, text: newText } : field
        );
        setFields(updatedFields);
    };

    const toggleSvernut = (id) => {
        const updatedFields = fields.map((field) =>
            field.id === id ? { ...field, svernut: !field.svernut } : field
        );
        setFields(updatedFields);
    };

    return (
        <div className="row p-2 my-5">
            <div className="col-12">
                <button onClick={addField} className="btn btn-outline-success p-2 w-25">
                    <FiPlus /> Добавить поле
                </button>
            </div>
            {fields.map((field) => (
                <div key={field.id} className="row-add-flied mt-3">
                    <div className="index">
                        <span>{field.id}</span>
                    </div>
                    <div className="input-addfield">
                        <input
                            className="input-animation w-100 ms-3"
                            type="text"
                            placeholder="Предмет договора"
                            value={field.text}
                            onChange={(e) => updateFieldText(field.id, e.target.value)}
                        />
                    </div>
                    <div className="btn-actions">
                        <button onClick={() => toggleSvernut(field.id)} className="btn-no-name mx-2">
                            {field.svernut ? <TiArrowMinimise /> : <TiArrowMaximise />}
                        </button>
                        <button onClick={() => removeField(field.id)} className="btn-no-name text-danger mx-2">
                            <MdOutlinePlaylistRemove />
                        </button>
                        <button className="btn-no-name text-success mx-2">
                            <IoReloadOutline />
                        </button>
                    </div>
                    {field.svernut && (
                        <div className="add-field-text-area my-4 enter-more-info">
                            <textarea
                                className="input-animation"
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                            ></textarea>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
