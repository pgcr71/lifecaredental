import getServices from '@/app/_utils/getServices';
import ServicesDetails from '../../_components/Services/ServicesDetails';

export function generateStaticParams() {
    const services = getServices();
    console.log(services.map(({ id, title }) => ({ slug: [id, title] })))
    return services.map(({ id, title }) => ({ slug: [''+id, title] }));
}

export default function Page() {
    return <ServicesDetails />
}