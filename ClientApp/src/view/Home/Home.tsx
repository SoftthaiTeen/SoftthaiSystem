import React, { useEffect } from "react";
import ContentWrapper, { FormWrapper } from "src/components/Commons/style/ContentWrapper";
import { Typography } from "@material-ui/core";

export default function Home() {
    
    return (
        <ContentWrapper>
            <FormWrapper>
                <Typography variant="h2" align="center">
                    {"Softthai Hello"}
                </Typography>
            </FormWrapper>
        </ContentWrapper>
    );
}
