'use server';



import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiShoeStyleAdvisorInputSchema = z.object({
  stylePreferences: z
    .string()
    .describe(
      'A description of the users style preferences, including preferred colors, materials, brands, and use cases.'
    ),
});
export type AiShoeStyleAdvisorInput = z.infer<typeof AiShoeStyleAdvisorInputSchema>;

const AiShoeStyleAdvisorOutputSchema = z.object({
  suggestedShoes: z
    .string()
    .describe(
      'A list of suggested shoes that match the users stated style preferences.'
    ),
  reasoning: z
    .string()
    .describe(
      'The reasoning behind the shoe suggestions, explaining why each shoe matches the users preferences.'
    ),
});
export type AiShoeStyleAdvisorOutput = z.infer<typeof AiShoeStyleAdvisorOutputSchema>;

export async function aiShoeStyleAdvisor(
  input: AiShoeStyleAdvisorInput
): Promise<AiShoeStyleAdvisorOutput> {
  return aiShoeStyleAdvisorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiShoeStyleAdvisorPrompt',
  input: {schema: AiShoeStyleAdvisorInputSchema},
  output: {schema: AiShoeStyleAdvisorOutputSchema},
  prompt: `You are a personal style advisor for shoes. A user will describe their style preferences, and you will suggest shoes that match their preferences.

Style Preferences: {{{stylePreferences}}}

Suggest shoes that match the users preferences. Explain your reasoning for each suggestion.
`,
});

const aiShoeStyleAdvisorFlow = ai.defineFlow(
  {
    name: 'aiShoeStyleAdvisorFlow',
    inputSchema: AiShoeStyleAdvisorInputSchema,
    outputSchema: AiShoeStyleAdvisorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
