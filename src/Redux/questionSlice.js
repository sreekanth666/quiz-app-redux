import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuestions = createAsyncThunk('quizSlice/fetchQuestions', async () => {
    const response = await axios.get("./demoQuestions.json");
    return response.data;
});
// https://quizapi.io/api/v1/questions?apiKey=YKS00IB8flyN2ittkBBtvucPUjMn88XRQ9IMQFDp&limit=10

const questionSlice = createSlice({
    name: "quizSlice",
    initialState: {
        allQuestion: [],
        finalTimer: "0 Seconds",
        questionNumber: 1,
        score: 0,
        loading: "Initial State",
        error: ""
    },
    reducers: {
        calculateScore: (state) => {
            state.score += 1;
        },
        incrementQuestionNumber: (state) => {
            state.questionNumber += 1
        },
        setFinalTime: (state, action) => {
            state.finalTimer = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuestions.pending, (state) => {
                state.loading = "loading";
            })
            .addCase(fetchQuestions.fulfilled, (state, action) => {
                state.loading = "success";
                state.allQuestion = action.payload;
                state.error = "";
            })
            .addCase(fetchQuestions.rejected, (state, action) => {
                state.loading = "error";
                state.allQuestion = [];
                state.error = action.error.message || "An error occurred while fetching questions.";
            });
    }
});

export const { calculateScore, incrementQuestionNumber, setFinalTime } = questionSlice.actions;
export default questionSlice.reducer;
