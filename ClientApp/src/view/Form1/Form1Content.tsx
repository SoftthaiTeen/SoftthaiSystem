import React from 'react';
import ContentWrapper from "src/components/Commons/style/ContentWrapper";
import SimpleForm1 from "src/view/Form1/SimpleForm1";
import DataTableForm1 from "src/view/Form1/DataTableForm1";

function Form1Content() {
    return (
        <React.Fragment>
            <ContentWrapper>
                <SimpleForm1 />
                <DataTableForm1 />
            </ContentWrapper>
        </React.Fragment>

    )
}

export default Form1Content;
