import React, { useEffect, useState } from "react";
import api from "../services/api";

const Exercises = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        const fetchExercises = async () => {
            try {
                const response = await api.get("/getAllExercises");
                setExercises(response.data);
            } catch (error) {
                console.error("Erro ao buscar exercícios:", error);
            }
        };

        fetchExercises();
    }, []);

    return (
        <div>
            <h2>Lista de Exercícios</h2>
            <ul>
                {exercises.map((exercise) => (
                    <li key={exercise.id}>{exercise.nome}</li>
                ))}
            </ul>
        </div>
    );
};

export default Exercises;
