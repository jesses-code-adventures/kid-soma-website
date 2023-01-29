import {z, defineCollection} from 'astro:content';

const collections = {
    'show': defineCollection({
        schema: z.object({
            layout: z.string(),
            date: z.date(),
            title: z.string(),
            shortDescription: z.string(),
            body: z.string().optional(),
            createdDate: z.date(),
            eventURL: z.string().url().optional(),
            ticketURL: z.string().url().optional(),
            headerImage: z.string().optional(),
            featureImage: z.string().optional()
        })
    })
}